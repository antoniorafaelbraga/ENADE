package br.ufc.quixada;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

import br.ufc.quixada.bd.Persistencia;

public class Filtragens extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public Filtragens() {
        super();
    }

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String curso = request.getParameter("curso").trim();
		String ano = request.getParameter("ano").trim();
		
		System.out.println(curso);
		System.out.println(ano);
		
		response.setContentType("text/plain");
		String banco = Persistencia.selectAllYears();
		response.getWriter().write(banco);
	}
}