package com.chamados.controllers.routers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chamados.controllers.process.UsuarioControll;
import com.chamados.models.entities.Usuario;

@RestController
@RequestMapping("/api")
public class UsuarioRoute {
	@Autowired
	UsuarioControll controll;
	
	@GetMapping("/usuarios")
	public List<Usuario> listarUsuario() {
		return controll.listarUsuarios();
	}
}
