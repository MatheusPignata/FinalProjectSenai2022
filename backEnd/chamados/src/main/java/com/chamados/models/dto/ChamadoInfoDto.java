package com.chamados.models.dto;

import com.chamados.models.entities.Chamado;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ChamadoInfoDto {
	private long id;
	private UsuarioInfoDto usuario;
	private String produto;
	private String cor;
	private String descricao;
	private String status;
	private String marca;
	private long orcamento;

	public ChamadoInfoDto(Chamado c, long id) {
		this.id = c.getId();
		this.usuario = new UsuarioInfoDto(c.getUsuario());
		this.produto = c.getProduto();
		this.cor = c.getCor();
		this.descricao = c.getDescricao();
		this.status = c.getStatus();
		this.marca = c.getMarca();
		this.orcamento = c.getOrcamento();
	}
}
