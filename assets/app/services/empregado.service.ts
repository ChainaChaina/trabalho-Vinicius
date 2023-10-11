import { Empregado } from '../models/empregado.model';

export class EmpregadoService {
  private empregados: Empregado[] = [];
  constructor() {
    this.empregados.push(new Empregado('Murilo', 22));
    this.empregados.push(new Empregado('Mario', 21));
    this.empregados.push(new Empregado('Julia', 25));
  }

  getEmpregados(): Empregado[] {
    return this.empregados;
  }

  addEmpregado(empregado: Empregado): void {
    this.empregados.push(empregado);
  }
}
