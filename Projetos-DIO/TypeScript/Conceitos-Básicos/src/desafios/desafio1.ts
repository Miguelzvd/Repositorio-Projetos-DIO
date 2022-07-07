// Como podemos rodar isso em um arquivo .ts sem causar erros? 
export {} // Para não reclamar de variáveis duplicadas

interface Employee{
    code: number;
    name: string;
}

const employee = {} as Employee;

employee.code = 10;
employee.name = "John";