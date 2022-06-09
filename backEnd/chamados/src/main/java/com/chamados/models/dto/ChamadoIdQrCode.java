package com.chamados.models.dto;

import com.chamados.models.entities.Chamado;

public class ChamadoIdQrCode {
	private long id;

	public ChamadoIdQrCode(Chamado chamado) {
		this.id = chamado.getId();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

}
