package com.chamados.controllers.routers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chamados.controllers.process.UsuarioControll;
import com.chamados.models.dto.AdminLoginDto;
import com.chamados.models.dto.UsuarioInfoDto;
import com.chamados.models.dto.UsuarioLoginDto;
import com.chamados.models.entities.Usuario;

@RestController
public class UsuarioRoute {
	@Autowired
	UsuarioControll controll;

	// todos usuarios
	@GetMapping("/listuser")
	public List<UsuarioLoginDto> listarUsuario() {
		return controll.listarUsuarios();
	}

	// listar informações do usuario especifico
	@GetMapping("/listuser/{id}")
	public ResponseEntity<Object> listarInfoUsuario(@PathVariable long id) {
		return controll.listarInfoUsuario(id);
	}

	// login e cadastro
	@PostMapping("/login")
	public ResponseEntity<UsuarioLoginDto> loginUsuario(@RequestBody Usuario u) {
		return controll.loginUsuario(u.getCpf(), u.getSenha());
	}

	@PostMapping("/cadastrar")
	public ResponseEntity<UsuarioLoginDto> cadastrarUsuario(@RequestBody Usuario u) {
		return controll.criarUsuario(u);
	}
	

	@PutMapping("/alterar/{id}")
	public ResponseEntity<Object> alterarIndoUsuario(@RequestBody Usuario u, @PathVariable long id) {
		return controll.altUsuario(u, id);
	}

	@DeleteMapping("/deletar/{id}")
	public ResponseEntity<Object> remUsuario(@PathVariable long id) {
		return controll.remUsuario(id);
	}

}
