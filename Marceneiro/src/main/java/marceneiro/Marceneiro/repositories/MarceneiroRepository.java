package marceneiro.Marceneiro.repositories;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import marceneiro.Marceneiro.models.Movel;

@Repository
public interface MarceneiroRepository extends CrudRepository<Movel, UUID>{
	ArrayList<Movel> findAll();
}
