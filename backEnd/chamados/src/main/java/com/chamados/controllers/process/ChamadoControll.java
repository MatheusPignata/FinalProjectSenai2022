package com.chamados.controllers.process;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.chamados.models.dto.ChamadoInfoDto;
import com.chamados.models.entities.Chamado;
import com.chamados.models.entities.Usuario;
import com.chamados.models.repositorys.ChamadoRepository;

@Component
public class ChamadoControll {
	@Autowired
	ChamadoRepository repository;

	Chamado usu;

	public ResponseEntity<ChamadoInfoDto> criarChamado(Chamado chamado, long id) {
		try {
			Usuario usuario = new Usuario();
			usuario.setId(id);
			chamado.setUsuario(usuario);
			usu = repository.save(chamado);
			return new ResponseEntity<ChamadoInfoDto>(new ChamadoInfoDto(usu), HttpStatus.ACCEPTED);
		} catch (DataIntegrityViolationException e) {
			return new ResponseEntity<ChamadoInfoDto>(HttpStatus.BAD_REQUEST);
		}

	}

	public List<ChamadoInfoDto> listarChamados(String status) {
		List<ChamadoInfoDto> lis = new ArrayList<ChamadoInfoDto>();
		repository.findAll().stream().forEach(u -> {
			if (status == null) {
				lis.add(new ChamadoInfoDto(u));
			} else {
				if ((u.getStatus() != null) && u.getStatus().equals(status)) {
					lis.add(new ChamadoInfoDto(u));
				}
			}
		});
		return lis;
	}

	public ResponseEntity<Object> listarInfoChamado(long id) {
		usu = repository.findById(id).orElse(null);
		return usu != null ? ResponseEntity.ok().body(new ChamadoInfoDto(usu)) : ResponseEntity.badRequest().body("");
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

				Chamado chamado = repository.save(ch);
				ChamadoInfoDto chamadoDto = new ChamadoInfoDto(chamado);

				return chamado != null ? new ResponseEntity<Object>(chamadoDto, HttpStatus.OK)
						: new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
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
}
