package com.chamados.controllers.process;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.chamados.models.dto.UsuarioLoginDTO;
import com.chamados.models.entities.Usuario;
import com.chamados.models.repositorys.UsuarioRepository;

@Component
public class UsuarioControll {
	@Autowired
	UsuarioRepository repository;

	public ResponseEntity<Object> criarUsuario(Usuario u) {
		try {
			repository.save(u);
			return ResponseEntity.ok().body(null);
		} catch (DataIntegrityViolationException e) {
			return ResponseEntity.badRequest().body(null);
		}
	}

	public ResponseEntity<UsuarioLoginDTO> loginUsuario(String cpf, String senha) {
		Usuario usuario = repository.login(cpf, senha);
		return usuario != null ? new ResponseEntity<UsuarioLoginDTO>(new UsuarioLoginDTO(usuario), HttpStatus.ACCEPTED)
				: new ResponseEntity<UsuarioLoginDTO>(HttpStatus.BAD_REQUEST);
	}

	public ResponseEntity<Object> listarInfoUsuario(long id) {
		Usuario usuario = repository.findById(id).orElse(null);
		return usuario != null ? ResponseEntity.ok().body(usuario) : ResponseEntity.badRequest().body("");
	}

	public List<UsuarioLoginDTO> listarUsuarios() {
		List<UsuarioLoginDTO> lis = new ArrayList<UsuarioLoginDTO>();
		repository.findAll().stream().forEach(u -> lis.add(new UsuarioLoginDTO(u)));
		return lis;
	}

	public ResponseEntity<Object> altUsuario(Usuario u, long id) {
		try {
			return repository.findById(id).map(us -> {
				us.setNome(u.getNome());
				us.setEmail(u.getEmail());
				us.setTelefone(u.getTelefone());
				us.setEndereco(u.getEndereco());

				Usuario usuario = repository.save(us);

				return usuario != null ? ResponseEntity.ok().body(null) : ResponseEntity.status(406).body(null);
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
