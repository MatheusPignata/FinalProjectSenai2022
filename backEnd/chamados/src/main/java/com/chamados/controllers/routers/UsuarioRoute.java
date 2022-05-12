package com.chamados.controllers.routers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chamados.controllers.process.UsuarioControll;
import com.chamados.models.entities.Usuario;

@RestController
@RequestMapping("/usu")
public class UsuarioRoute {
	@Autowired
	UsuarioControll controll;

	@GetMapping("/usuarios")
	public List<Usuario> listarUsuario() {
		return controll.listarUsuarios();
	}
	
	@PostMapping("/usuarios")
	public Usuario criarUsuario(@RequestBody Usuario usuario) {
		return controll.criarUsuario(usuario);
	}
	
	@PostMapping("/login")
	public Usuario LoginUsuario(@RequestBody String codigo) {
		return controll.LoginUsuario(codigo);
	}
}
