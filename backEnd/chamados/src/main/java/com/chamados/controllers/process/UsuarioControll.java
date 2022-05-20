package com.chamados.controllers.process;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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
			return new ResponseEntity<UsuarioLoginDto>(
					new UsuarioLoginDto(usuario.getId(), usuario.getNome(), usuario.getEmail(), usuario.getTelefone()),
					HttpStatus.ACCEPTED);
		} catch (DataIntegrityViolationException e) {
			return new ResponseEntity<UsuarioLoginDto>(new UsuarioLoginDto(), HttpStatus.BAD_REQUEST);
		}
	}

	public ResponseEntity<UsuarioLoginDto> loginUsuario(String codigo) {
		Usuario u = repository.usuarioLogin(codigo);
		return u != null
				? new ResponseEntity<UsuarioLoginDto>(
						new UsuarioLoginDto(u.getId(), u.getNome(), u.getEmail(), u.getTelefone()), HttpStatus.ACCEPTED)
				: new ResponseEntity<UsuarioLoginDto>(new UsuarioLoginDto(), HttpStatus.BAD_REQUEST);
	}

	public ResponseEntity<UsuarioInfoDto> listarInfoUsuario(long id) {
		Usuario usuario = repository.findById(id).orElse(null);
		return usuario != null
				? new ResponseEntity<UsuarioInfoDto>(new UsuarioInfoDto(usuario.getId(), usuario.getCpf(),
						usuario.getNome(), usuario.getEmail(), usuario.getTelefone()), HttpStatus.ACCEPTED)
				: new ResponseEntity<UsuarioInfoDto>(new UsuarioInfoDto(), HttpStatus.BAD_REQUEST);
	}

	public List<UsuarioLoginDto> listarUsuarios() {
		List<UsuarioLoginDto> lis = new ArrayList<UsuarioLoginDto>();
		repository.findAll().stream().filter(u -> u.getCpf().equals("")).forEach(u -> lis.add(new UsuarioLoginDto(u)));
		return lis;
	}

	public ResponseEntity<AdminLoginDto> loginAdmin(Usuario u) {
		Usuario usuario = repository.adminLogin(u.getCpf(), u.getSenha());
		return usuario != null ? new ResponseEntity<AdminLoginDto>(new AdminLoginDto(usuario), HttpStatus.ACCEPTED)
				: new ResponseEntity<AdminLoginDto>(new AdminLoginDto(), HttpStatus.BAD_REQUEST);
	}
}
