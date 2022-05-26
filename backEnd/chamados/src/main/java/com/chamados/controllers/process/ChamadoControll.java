package com.chamados.controllers.process;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.chamados.models.dto.ChamadoInfoDto;
import com.chamados.models.dto.UsuarioLoginDto;
import com.chamados.models.entities.Chamado;
import com.chamados.models.entities.Usuario;
import com.chamados.models.repositorys.ChamadoRepository;

@Component
public class ChamadoControll {

	@Autowired
	ChamadoRepository repository;

	Chamado usu;

	public ResponseEntity<ChamadoInfoDto> criarChamado(Chamado chamado, long id) {
		Usuario usuario = new Usuario();
		usuario.setId(id);
		chamado.setUsuario(usuario);
		usu = repository.save(chamado);
		return new ResponseEntity<ChamadoInfoDto>(new ChamadoInfoDto(usu, usu.getUsuario().getId()), HttpStatus.ACCEPTED);
	}

	public List<ChamadoInfoDto> listarChamados() {
		List<ChamadoInfoDto> lis = new ArrayList<ChamadoInfoDto>();
		repository.findAll().stream().forEach(u -> 
			lis.add(new ChamadoInfoDto(u, u.getId()))
		);
		return lis;
	}
}
