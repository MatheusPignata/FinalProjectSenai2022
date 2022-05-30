package com.chamados.models.dto;

import com.chamados.models.entities.Chamado;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ChamadoClienteDto {
	private long id;
	private String produto;
	private String cor;
	private String descricao;
	private String status;
	private String marca;
	private long orcamento;
	
	public ChamadoClienteDto(Chamado c) {
		this.id = c.getId();
		this.produto = c.getProduto();
		this.cor = c.getCor();
		this.descricao = c.getDescricao();
		this.status = c.getStatus();
		this.marca = c.getMarca();
		this.orcamento = c.getOrcamento();
	}
}
