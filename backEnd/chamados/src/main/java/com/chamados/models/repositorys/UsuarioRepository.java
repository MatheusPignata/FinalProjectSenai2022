package com.chamados.models.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;

import com.chamados.models.entities.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{

}
