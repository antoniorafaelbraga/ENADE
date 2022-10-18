package br.ufc.quixada.bd;

import java.sql.Connection;  
import java.sql.DriverManager;
import java.sql.SQLException;
   
public class Connect {  
     /** 
     * Connect to a sample database 
     * @return 
     * @throws ClassNotFoundException 
     */  
    public static Connection connect() throws ClassNotFoundException {  
        Connection conn = null;  
        try {  
        	Class.forName("org.sqlite.JDBC");
            String url = "jdbc:sqlite:C:/Users/rafae/eclipse-workspace/ENADE/src/main/bd/enade.db";
            conn = DriverManager.getConnection(url);
            System.out.println("Connection to SQLite has been established.");  
        } catch (SQLException e) {  
            System.out.println(e.getMessage());  
        }
		return conn; 
    }

    /** 
     * @param args the command line arguments 
     * @throws ClassNotFoundException 
     */  
    public static void main(String[] args) throws ClassNotFoundException {
        Persistencia.selectAllCursos();
    	Persistencia.selectAllYears();
    }  
}  