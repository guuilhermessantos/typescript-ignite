
/**
 * name - string
 * duration - number
 * educator - string
 */

// atributos
interface Course {
  name: string;
  duration?: number;
  educator: string;
}



class CreateCouseService { // função que recebe dados para criação do curso

  execute({duration = 8, educator, name}: Course) {  
    console.log(name, duration, educator);
    }
}

export default new CreateCouseService();