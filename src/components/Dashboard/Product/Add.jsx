import './Add.css'
import PayLayout from "../PageLayout/PayLayout"
import axios from "axios";
import { Col, Row, Form, InputGroup,  } from "react-bootstrap"
import { useForm } from "react-hook-form";
import { RiUser3Fill} from "react-icons/ri";
const Add = () =>{
    const { register, handleSubmit} = useForm();
    const onSubmit = (data, event) =>{
        const url ='http://localhost:8080/add-product'
        axios.post(url, data).then(res=>{
            const result = res.data
            if(result.insertedId){
                event.target.reset()
            }
        })
    };
    return(
        <PayLayout>
            <Col md={6}>
                <div className="productAddContainer boxShadow">
                    <h1 className="mb-3">Please Add Product Info</h1>
                    <div className="addProductForm">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Row>
                                <Col md={6}>
                                    <Form.Label>Product Name <span className="formRequired">*</span></Form.Label>
                                    <InputGroup className="mb-4">
                                        <InputGroup.Text><RiUser3Fill/></InputGroup.Text>
                                        <input required type="text" placeholder="Product Name" {...register("proName", { required: true, maxLength: 20 })} className="form-control"/>                                        
                                    </InputGroup>
                                </Col>
                                <Col md={6}>
                                    <Form.Label>Product Category <span className="formRequired">*</span></Form.Label>
                                    <InputGroup className="mb-4">
                                        <InputGroup.Text><RiUser3Fill/></InputGroup.Text>
                                        <select required {...register("category", {required: true})} className="form-control" >
                                            <option value="Laptop">Laptop</option>
                                            <option value="Camera">Camera</option>
                                            <option value="Desktop">Desktop</option>
                                        </select>
                                    </InputGroup>
                                </Col>
                                <Col md={6}>
                                    <Form.Label>Product Code <span className="formRequired">*</span></Form.Label>
                                    <InputGroup className="mb-4">
                                        <InputGroup.Text><RiUser3Fill/></InputGroup.Text>
                                        <input required type="number" placeholder="Buy Price" {...register("proCode", {required: true})} className="form-control" />
                                    </InputGroup>
                                </Col>
                                <Col md={6}>
                                    <Form.Label>Stock Product <span className="formRequired">*</span></Form.Label>
                                    <InputGroup className="mb-4">
                                        <InputGroup.Text><RiUser3Fill/></InputGroup.Text>
                                        <input required type="number" placeholder="Product Stock" {...register("proStock", { required: true})} className="form-control" />
                                    </InputGroup>
                                </Col>
                                <Col md={6}>
                                    <Form.Label>Buy Price <span className="formRequired">*</span></Form.Label>
                                    <InputGroup className="mb-4">
                                        <InputGroup.Text><RiUser3Fill/></InputGroup.Text>
                                        <input required type="number" placeholder="Buy Price" {...register("buyPrice", {required: true})} className="form-control" />
                                    </InputGroup>
                                </Col>
                                <Col md={6}>
                                    <Form.Label>Sale Price <span className="formRequired">*</span></Form.Label>
                                    <InputGroup className="mb-4">
                                        <InputGroup.Text><RiUser3Fill/></InputGroup.Text>
                                        <input required type="number" placeholder="Sale Price" {...register("salePrice", {required: true})} className="form-control" />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <input type="submit" className="form-control" />
                        </form>
                    </div>
                </div>
            </Col>
            <Col md={3}>

            </Col>
        </PayLayout>
    )
}
export default Add