package com.chamados.controllers.process;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.chamados.models.dto.ChamadoClienteDTO;
import com.chamados.models.dto.ChamadoIdQrCode;
import com.chamados.models.dto.InfoChamadoDTO;
import com.chamados.models.dto.TodosChamadosDTO;
import com.chamados.models.entities.Chamado;
import com.chamados.models.entities.Usuario;
import com.chamados.models.repositorys.ChamadoRepository;

@Component
public class ChamadoControll {
	@Autowired
	ChamadoRepository repository;

	Chamado usu;

	public ResponseEntity<Object> criarChamado(Chamado chamado) {
		try {
			Usuario funcionario = new Usuario();
			funcionario.setId(chamado.getFuncionario().getId());
			chamado.setFuncionario(funcionario);

			Usuario usuario = new Usuario();
			usuario.setId(chamado.getCliente().getId());
			chamado.setCliente(usuario);

			usu = repository.save(chamado);
			return ResponseEntity.ok().body(new ChamadoIdQrCode(usu));
		} catch (DataIntegrityViolationException e) {
			return ResponseEntity.badRequest().body("");
		}
	}

	public List<ChamadoClienteDTO> listarChamadosCliente(long id) {
		List<ChamadoClienteDTO> lis = new ArrayList<ChamadoClienteDTO>();
		repository.findAll().stream().filter(u -> u.getCliente().getId() == id).forEach(u -> {
			lis.add(new ChamadoClienteDTO(u));
		});
		return lis;
	}

	public List<TodosChamadosDTO> listarChamados(String status) {
		List<TodosChamadosDTO> lis = new ArrayList<TodosChamadosDTO>();
		repository.findAll().stream().forEach(u -> {
			if (status == null) {
				lis.add(new TodosChamadosDTO(u));
			} else {
				if ((u.getStatus() != null) && u.getStatus().equals(status)) {
					lis.add(new TodosChamadosDTO(u));
				}
			}
		});
		return lis;
	}

	public ResponseEntity<Object> listarInfoChamado(long id) {
		usu = repository.findById(id).orElse(null);
		return usu != null ? ResponseEntity.ok().body(new InfoChamadoDTO(usu)) : ResponseEntity.badRequest().body("");
	}

	public ResponseEntity<Object> altChamado(Chamado u, long id) {
		try {
			return repository.findById(id).map(ch -> {
				ch.setCor(u.getCor());
				ch.setDescricao(u.getDescricao());
				ch.setMarca(u.getMarca());
				ch.setOrcamento(u.getOrcamento());
				ch.setProduto(u.getProduto());
				ch.setStatus(u.getStatus());
				ch.setSerial(u.getSerial());
				ch.setFuncionario(u.getFuncionario());
				ch.setCliente(u.getCliente());

				
				Chamado chamado = repository.save(ch);

				return chamado != null ? ResponseEntity.ok().body(null) : ResponseEntity.status(406).body(null);
			}).orElse(ResponseEntity.notFound().build());
		} catch (DataIntegrityViolationException e) {
			return ResponseEntity.badRequest().body("");
		}
	}

	public ResponseEntity<Object> remChamado(long id) {
		try {
			repository.deleteById(id);
			return ResponseEntity.ok().body("");
		} catch (EmptyResultDataAccessException e) {
			return ResponseEntity.badRequest().body("");
		}
	}
	
	public List<TodosChamadosDTO> filter(String frase) {
		List<Chamado> lis = repository.findAll();
		
		List<TodosChamadosDTO> lisFiltrado = new ArrayList<TodosChamadosDTO>();
		
		for (Chamado chamado : lis) {
			String id = "" +chamado.getId();
			String orcamento = "" +chamado.getOrcamento();
			
			if(chamado.getProduto().contains(frase) || chamado.getStatus().contains(frase) || id.contains(frase) || chamado.getSerial().contains(frase)) {
				lisFiltrado.add(new TodosChamadosDTO(chamado));
			}
		}
		return lisFiltrado;
	}
}
