import JobForm from "../components/JobForm"
export default function JobCadPage() {



    return (

        <div className="jobFormBox">
            <div className="jobAnnouce">
                <h3>Atenção:</h3>
                <p>Todas as vagas cadastradas terão seu conteúdo analisado. O prazo para publicação é de até 24 horas.</p>
                <p>É necessário ser muito claro ao preencher a vaga, todos os campos deverão ser ocupados.</p>
                <h4>As vagas deverão seguir as recomendações legais, ou serão excluídas:
                </h4>
                <p>Nos anúncios de trabalho, de emprego ou de estágio NÃO PODERÃO FAZER referência a raça, gênero, origem, idade, cor, peso, altura, tamanho, aparência, estado civil, orientação sexual, gravidez, situação familiar, religião, orientação política, condições de saúde, aparência física, ascendência nacional, existência de filhos, número de registro no Cadastro de Pessoas Físicas - CPF, existência de dívidas, existência de ações judiciais, local de residência, experiência superior a seis meses, local de residência, exigência de condução própria.</p>
            </div>
           <JobForm />
        </div>
    )
    
};
