package com.chamados.models.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chamados.models.entities.Chamado;

@Repository
public interface ChamadoRepository extends JpaRepository<Chamado, Long> {
	
}
