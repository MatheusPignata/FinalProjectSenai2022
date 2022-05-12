package com.chamados.controllers.process;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.chamados.models.entities.Chamado;
import com.chamados.models.entities.Usuario;
import com.chamados.models.repositorys.ChamadoRepository;

@Component
public class ChamadoControll {

	@Autowired
	ChamadoRepository repository;

	Usuario usu;

	public Chamado criarChamado(Chamado chamado, long id) {
		usu = new Usuario(id);
		chamado.setUsuario(usu);
		return repository.save(chamado);
	}

	public List<Chamado> listarChamados() {
		return repository.findAll();
	}
}
