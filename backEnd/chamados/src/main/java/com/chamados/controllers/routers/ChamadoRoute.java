package com.chamados.controllers.routers;

import java.util.List;

import javax.validation.constraints.Null;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.bind.DefaultValue;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chamados.controllers.process.ChamadoControll;
import com.chamados.models.dto.ChamadoInfoDto;
import com.chamados.models.entities.Chamado;

@RestController
@RequestMapping("/cha")
public class ChamadoRoute {
	@Autowired
	ChamadoControll controll;

	@GetMapping("/chamadosAll/{status}")
	public List<ChamadoInfoDto> listarChamado(@PathVariable @Nullable String status) {
		System.out.println("STATUSUSUSUSUU ------ "+status);
		return controll.listarChamados(status);
	}	
	
	@GetMapping("/chamados/{id}")
	public ResponseEntity<ChamadoInfoDto> listarInfoChamado(@PathVariable long id) {
		return controll.listarInfoChamado(id);
	}
	
	@PostMapping("/chamados/{id}")
	public ResponseEntity<ChamadoInfoDto> criarChamado(@RequestBody Chamado chamado, @PathVariable long id) {
		return controll.criarChamado(chamado, id);
	}
	
	
}
