import {
  useParams
} from "react-router-dom";
export default function ProductDetail() {
  const { id }= useParams();
  return (
    <div className="container bg-main">
      <h2 className="mb-4">stone lotus</h2>
    <img src="https://webcaycanh.com/wp-content/uploads/2015/09/sen-da-nau-3.jpg"></img>
    </div>
  )
}
