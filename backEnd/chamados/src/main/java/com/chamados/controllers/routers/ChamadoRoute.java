package com.chamados.controllers.routers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chamados.controllers.process.ChamadoControll;
import com.chamados.models.entities.Chamado;
import com.chamados.models.entities.Usuario;

@RestController
@RequestMapping("/cha")
public class ChamadoRoute {
	@Autowired
	ChamadoControll controll;

	@GetMapping("/chamados")
	public List<Chamado> listarChamado() {
		return controll.listarChamados();
	}

	@PostMapping("/chamados")
	public Chamado criarChamado(@RequestBody Chamado chamado, Usuario user) {
		System.err.println(user);
		return controll.criarChamado(chamado);
	}
}
