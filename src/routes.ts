import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) { // definindo tipagem do request response

  CreateCourseService.execute({ // execuntando a função e passando parametros
    name: "NodeJS",
    educator: "Dani",
    duration: 10,
    
    
  })
  CreateCourseService.execute({ // execuntando a função e passando parametros
    name: "NodeJS",
    educator: "Gui",
  })
  return response.send()

}

