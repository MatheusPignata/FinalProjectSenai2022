package com.chamados.controllers.process;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.chamados.models.dto.AdminLoginDto;
import com.chamados.models.dto.UsuarioInfoDto;
import com.chamados.models.dto.UsuarioLoginDto;
import com.chamados.models.entities.Usuario;
import com.chamados.models.repositorys.UsuarioRepository;

@Component
public class UsuarioControll {
	@Autowired
	UsuarioRepository repository;

	public ResponseEntity<UsuarioLoginDto> criarUsuario(Usuario u) {
		try {
			Usuario usuario = repository.save(u);
			return new ResponseEntity<UsuarioLoginDto>(new UsuarioLoginDto(usuario), HttpStatus.ACCEPTED);
		} catch (DataIntegrityViolationException e) {
			return new ResponseEntity<UsuarioLoginDto>(HttpStatus.BAD_REQUEST);
		}
	}

	public ResponseEntity<UsuarioLoginDto> loginUsuario(String cpf, String senha) {
		Usuario u = repository.login(cpf, senha);
		return u != null ? new ResponseEntity<UsuarioLoginDto>(new UsuarioLoginDto(u), HttpStatus.ACCEPTED)
				: new ResponseEntity<UsuarioLoginDto>(HttpStatus.BAD_REQUEST);
	}

	public ResponseEntity<Object> listarInfoUsuario(long id) {
		Usuario u = repository.findById(id).orElse(null);
		return u != null ? ResponseEntity.ok().body(u) : ResponseEntity.badRequest().body("");
	}

	public List<UsuarioLoginDto> listarUsuarios() {
		List<UsuarioLoginDto> lis = new ArrayList<UsuarioLoginDto>();
		repository.findAll().stream()
				.forEach(u -> lis.add(new UsuarioLoginDto(u)));
		return lis;
	}

	public ResponseEntity<AdminLoginDto> loginAdmin(Usuario u) {
		Usuario usuario = repository.login(u.getCpf(), u.getSenha());
		return usuario != null ? new ResponseEntity<AdminLoginDto>(new AdminLoginDto(usuario), HttpStatus.ACCEPTED)
				: new ResponseEntity<AdminLoginDto>(HttpStatus.BAD_REQUEST);
	}

	public ResponseEntity<Object> altUsuario(Usuario u, long id) {
		try {
			return repository.findById(id).map(us -> {
				us.setNome(u.getNome());
				us.setCpf(u.getCpf());
				us.setEmail(u.getEmail());
				us.setSenha(u.getSenha());
				us.setTelefone(u.getTelefone());
				us.setEndereco(u.getEndereco());
				
				Usuario usuario = repository.save(us);

				return usuario != null ? new ResponseEntity<Object>(usuario, HttpStatus.OK)
						: new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
			}).orElse(ResponseEntity.notFound().build());
		} catch (DataIntegrityViolationException e) {
			return ResponseEntity.badRequest().body("");
		}
	}

	public ResponseEntity<Object> remUsuario(long id) {
		repository.deleteById(id);
		return ResponseEntity.ok().body("cu");
	}
}
