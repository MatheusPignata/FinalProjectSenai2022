package com.chamados.controllers.process;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chamados.models.entities.Usuario;
import com.chamados.models.repositorys.UsuarioRepository;

@Service
public class UsuarioControll {
	
	@Autowired
	UsuarioRepository repository;
	
	public List<Usuario> listarUsuarios() {
		return repository.findAll();
	}
}
