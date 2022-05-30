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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.chamados.controllers.process.ChamadoControll;
import com.chamados.models.dto.ChamadoClienteDto;
import com.chamados.models.dto.ChamadoInfoDto;
import com.chamados.models.entities.Chamado;

@RestController
@RequestMapping("/ch")
public class ChamadoRoute {
	@Autowired
	ChamadoControll controll;

	@GetMapping("/lis")
	public List<ChamadoInfoDto> listarChamado(@RequestParam(required = false) String status) {
		return controll.listarChamados(status);
	}

	@GetMapping("/lis/{id}")
	public List<ChamadoClienteDto> listarChamadosCliente(@PathVariable long id) {
		return controll.listarChamadosCliente(id);
	}

	@GetMapping("/inf/{id}")
	public ResponseEntity<Object> listarInfoChamado(@PathVariable long id) {
		return controll.listarInfoChamado(id);
	}

	@PostMapping("/cri/{id}")
	public ResponseEntity<ChamadoInfoDto> criarChamado(@RequestBody Chamado chamado, @PathVariable long id) {
		return controll.criarChamado(chamado, id);
	}

	@PutMapping("/alt/{id}")
	public ResponseEntity<Object> altChamado(@RequestBody Chamado chamado, @PathVariable long id) {
		return controll.altChamado(chamado, id);
	}

	@DeleteMapping("/del/{id}")
	public ResponseEntity<Object> remChamado(@PathVariable long id) {
		return controll.remChamado(id);
	}
}
