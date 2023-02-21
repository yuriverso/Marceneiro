package marceneiro.Marceneiro.services;

import java.util.ArrayList;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import marceneiro.Marceneiro.models.Movel;
import marceneiro.Marceneiro.repositories.MarceneiroRepository;

@Service
public class MarceneiroService {
	
	@Autowired
	private MarceneiroRepository repo;
	
	
	public Optional<Movel> findById(UUID id){
		return repo.findById(id);
	}
	
	public ArrayList<Movel> findAll(){
		return repo.findAll();
	}
	
	public Movel save(Movel m) {
		return repo.save(m);
	}
	
	public void delete(Movel m) {
		repo.delete(m);
	}
	
}
