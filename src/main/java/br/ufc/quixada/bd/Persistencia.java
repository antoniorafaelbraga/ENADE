package br.ufc.quixada.bd;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Persistencia {
    
    public static String selectAllCursos(){  
        String sql = "SELECT * FROM Cursos";  
        Connection conn = null;
        String result = "";
        try {
            conn = Connect.connect();  
            Statement stmt  = conn.createStatement();  
            ResultSet rs    = stmt.executeQuery(sql);
            while (rs.next()) {           	
                System.out.println(rs.getInt("ID") +  "\t" +
                                   rs.getString("Nome") + "\t" +  
                                   rs.getInt("Codigo"));  
            }  
        } catch (SQLException | ClassNotFoundException e) {  
            System.out.println(e.getMessage());  
        } finally {  
            try {  
                if (conn != null) {  
                    conn.close();  
                }  
            } catch (SQLException ex) {  
                System.out.println(ex.getMessage());  
            }  
        }
        return result;
    } 
    
    public static String selectAllYears(){
		//String exemplo = "{\"val1\" : \"2017\", \"val2\" : \"2021\"}";
        String sql = "SELECT * FROM Anos";  
        Connection conn = null;
        String result = "{";
        try {
            conn = Connect.connect();  
            Statement stmt  = conn.createStatement();  
            ResultSet rs    = stmt.executeQuery(sql);
            while (rs.next()) {
            	int valor = rs.getInt("Valor");
            	if (result.equalsIgnoreCase("{")) {
            		result += "\""+valor+"\" : \""+valor+"\"";
				}else {
					result += ","+"\""+valor+"\" : \""+valor+"\"";
				}
            }
        } catch (SQLException | ClassNotFoundException e) {  
            System.out.println(e.getMessage());  
        } finally {  
            try {  
                if (conn != null) {  
                    conn.close();  
                }  
            } catch (SQLException ex) {  
                System.out.println(ex.getMessage());  
            }  
        }
        return result+"}";
    }
}
