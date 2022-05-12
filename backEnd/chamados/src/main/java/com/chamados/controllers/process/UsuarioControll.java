package com.chamados.controllers.process;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.chamados.models.entities.Usuario;
import com.chamados.models.repositorys.UsuarioRepository;

@Component
public class UsuarioControll {

	@Autowired
	UsuarioRepository repository;

	public Usuario criarUsuario(Usuario usuario) {
		return repository.save(usuario);
	}

	public Usuario LoginUsuario(String codigo) {
		return repository.usuarioLogin(codigo);
	}

	public List<Usuario> listarUsuarios() {
		return repository.findAll();
	}
}
