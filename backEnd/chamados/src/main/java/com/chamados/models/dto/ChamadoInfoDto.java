package com.chamados.models.dto;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.chamados.models.entities.Chamado;
import com.chamados.models.entities.Usuario;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ChamadoInfoDto {
	private long id;
	private Usuario usuario;
	private String produto;
	private String cor;
	private String descricao;
	private String status;
	private String marca;
	private long orcamento;

	public ChamadoInfoDto(Chamado c) {
		this.id = c.getId();
		this.usuario = new Usuario(c.getUsuario().getId(), c.getUsuario().getNome(), c.getUsuario().getEmail());
		this.produto = c.getProduto();
		this.cor = c.getCor();
		this.descricao = c.getDescricao();
		this.status = c.getStatus();
		this.marca = c.getMarca();
		this.orcamento = c.getOrcamento();
	}
}
