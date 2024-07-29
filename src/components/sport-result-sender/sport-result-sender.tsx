import { component$, useSignal } from "@builder.io/qwik";
import useFormatRegx from "~/core/useFormatTime";

interface ISportResultSenderProps {
    in: IForma[];
}

interface IForma{
    type: string;
}

interface IInputForma extends IForma{
    pattern: RegExp;
    format: string;
}

interface ISelectForma extends IForma{
    options: string[];
}

interface IChekboxForma extends IForma{
    title:string;
}

export default component$<ISportResultSenderProps>((props) => {
    const val = useSignal("");
    
    return (
        <div class="d-flex">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">дата</label>
                    <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Результат</label>
                    
                    {props.in.map((forma, i) => {
                        if(forma.type === "input"){
                            const iforma: IInputForma = forma as IInputForma;
                            return <input value={val.value} onInput$={(value) => val.value =  iforma.format != null ?useFormatRegx(value.target?.value ?? "", iforma.pattern, iforma.format) : value.target?.value} type="text" class="form-control" id="exampleInputPassword1" pattern={String(iforma.pattern)} placeholder={iforma.format}/>
                        }

                        if(forma.type === "select"){
                            const iforma: ISelectForma = forma as ISelectForma;
                            return <select class="form-select" aria-label="Default select example">
                                {iforma.options.map((option) => (
                                    <option>{option}</option>
                                ))}
                            </select>
                        }   

                        if(forma.type === "checkbox"){
                            const iforma: IChekboxForma = forma as IChekboxForma;
                            return <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    {iforma.title}
                                </label>
                            </div>
                        }
                    })}
                </div>
                <button type="submit" class="btn btn-primary">Отправить результат</button>
            </form>
        </div>
    );
})