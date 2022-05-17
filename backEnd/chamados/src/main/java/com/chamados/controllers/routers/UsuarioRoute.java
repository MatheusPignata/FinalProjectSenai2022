package com.chamados.controllers.routers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
@RequestMapping("/usu")
public class UsuarioRoute {
	@Autowired
	UsuarioControll controll;

	// login e cadastro
	@PostMapping("/logCad/{tipo}")
	public ResponseEntity<UsuarioLoginDto> loginUsuario(@RequestBody Usuario u, @PathVariable boolean tipo) {
		System.out.println(tipo);
		return tipo ? controll.criarUsuario(u) : controll.loginUsuario(u.getCodigo());
	}

	@PostMapping("/logAdm")
	public ResponseEntity<AdminLoginDto> loginAdmin(@RequestBody Usuario u) {
		return controll.loginAdmin(u);
	}

	// todos usuarios
	@GetMapping("/lisTodos")
	public List<Usuario> listarUsuario() {
		return controll.listarUsuarios();
	}

	// listar informações do usuario especifico
	@GetMapping("/info/{id}")
	public UsuarioInfoDto listarInfoUsuario(@PathVariable long id) {
		System.out.println(id);
		return controll.listarInfoUsuario(id);
	}
	/*
	@PutMapping("/alt/{id}")
	public ResponseEntity<UsuarioLoginDto> alterarIndoUsuario(@RequestBody Usuario u, @PathVariable long id) {
		return new ResponseEntity<UsuarioLoginDto>();
	}
	*/
}
