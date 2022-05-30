package com.chamados.models.repositorys;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chamados.models.entities.Chamado;

@Repository
public interface ChamadoRepository extends JpaRepository<Chamado, Long> {
	
}
