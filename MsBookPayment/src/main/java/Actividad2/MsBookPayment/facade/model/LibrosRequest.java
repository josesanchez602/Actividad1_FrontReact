package Actividad2.MsBookPayment.facade.model;

import java.util.List;

public class LibrosRequest {

    private List<Long> libros;

    public LibrosRequest(List<Long> ids) {
        this.libros = ids;
    }

    public List<Long> getLibros() {
        return libros;
    }

    public void setLibros(List<Long> libros) {
        this.libros = libros;
    }
}
