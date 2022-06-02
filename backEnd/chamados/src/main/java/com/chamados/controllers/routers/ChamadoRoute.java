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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.chamados.controllers.process.ChamadoControll;
import com.chamados.models.dto.ChamadoClienteDTO;
import com.chamados.models.dto.TodosChamadosDTO;
import com.chamados.models.entities.Chamado;

@RestController
public class ChamadoRoute {
	@Autowired
	ChamadoControll controll;

	// todos chamados
	@GetMapping("/listchamado")
	public List<TodosChamadosDTO> listarChamado(@RequestParam(required = false) String status) {
		return controll.listarChamados(status);
	}

	// chamados do cliente
	@GetMapping("/listchamado/cliente/{id}")
	public List<ChamadoClienteDTO> listarChamadosCliente(@PathVariable long id) {
		return controll.listarChamadosCliente(id);
	}

	@GetMapping("/listchamado/{id}")
	public ResponseEntity<Object> listarInfoChamado(@PathVariable long id) {
		return controll.listarInfoChamado(id);
	}

	@PostMapping("/criarchamado")
	public ResponseEntity<Object> criarChamado(@RequestBody Chamado chamado) {
		return controll.criarChamado(chamado);
	}

	@PutMapping("/alterarchamado/{id}")
	public ResponseEntity<Object> altChamado(@RequestBody Chamado chamado, @PathVariable long id) {
		return controll.altChamado(chamado, id);
	}

	@DeleteMapping("/deletarchamado/{id}")
	public ResponseEntity<Object> remChamado(@PathVariable long id) {
		return controll.remChamado(id);
	}
}
