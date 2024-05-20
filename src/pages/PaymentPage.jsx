import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import BCA from "../assets/bank-image/BCA.png";
import BNI from "../assets/bank-image/BNI.png";
import BRI from "../assets/bank-image/BRI.png";
import Dana from "../assets/bank-image/Dana.png";
import Gopay from "../assets/bank-image/Gopay.png";
import Mandiri from "../assets/bank-image/Mandiri.png";
import Ovo from "../assets/bank-image/OVO.png";
import ShopeePay from "../assets/bank-image/ShopeePay.png";

const TableRow = ({ noRek, nama, deleteButtonClickHandler }) => {
  return (
    <tr>
      <td className="text-center">{noRek}</td>
      <td className="text-center">{nama}</td>
      <td className="text-center">
        <button className="btn btn-danger delete-btn" onClick={deleteButtonClickHandler}>
          Hapus
        </button>
      </td>
    </tr>
  );
};

export default function PaymentPage() {
  const formRef = useRef(null);
	const [rows, setRows] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false)
  const rowsPerPage = 5;

  const nextButtonClickHandler = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevButtonClickHandler = () => {
    setCurrentPage(currentPage - 1);
  };

  const deleteButtonClickHandler = (index) => {
    Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    })
      .fire({
        title: "Are you sure?",
        text: "Jika anda menghapus data anda, data anda tidak akan kembali !!!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
				customClass: {
					confirmButton: "btn btn-success mx-2", // Add 'me-2' class to add margin-right to the confirm button
					cancelButton: "btn btn-danger", // No need to add additional classes to the cancel button
				},
      })
      .then((result) => {
        if (result.isConfirmed) {
          const updatedRows = [...rows];
					updatedRows.splice(index, 1);
					setRows(updatedRows);

					setTotalRows(totalRows - 1);

					// Display success notification
					Swal.fire({
						title: "Deleted!",
						text: "Data Pembayaran Berhasil Dihapus.",
						icon: "success",
					});
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            title: "Cancelled",
            text: "Huhh untung data anda tidak ter hapus :)",
            icon: "error",
          });
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
		setIsLoading(true);
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwf2x24g1dtjLClaXF4qPA4e0Z7mLt5jbf2rxTLh3Ns8KqFXEdE_bHhsBjQ7oFpOmgJOA/exec";
    const formData = new FormData(formRef.current);

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
				setIsLoading(false);
        console.log("Success!", response);
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Data berhasil ditambahkan.",
        });
				const newRow = {
					noRek,
					nama,
				};
		
				setRows([...rows, newRow]);
		
				formRef.current.reset();
      })
      .catch((error) => {
        console.error("Error!", error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Terjadi kesalahan, coba lagi nanti.",
        });
      });

    const noRek = formRef.current["Nama"].value;
    const nama = formRef.current["NomorRekening"].value;

    if (!noRek || !nama) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Nama dan Nomor Rekening harus diisi!",
      });
      return;
    }
  };

  const handleRestart = () => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Data yang belum disimpan akan hilang!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, Restart!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        const form = formRef.current;
        if (form) {
          form.reset();
          Swal.fire("Restarted!", "Formulir telah di-reset.", "success");
        } else {
          console.error("Form is not available.");
        }
      }
    });
  };

  return (
    <div className="background-payment">
      <div className="payment-container rounded">
        <div className="container-fluid grid-row">
          <h1 className="text-center p-3">Pembayaran</h1>
          <form id="data-form" className="mb-3" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group row">
              <label htmlFor="nama" className="col-sm-4 col-form-label text-white fw-bolder">
                Nama
              </label>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="nama" placeholder="Nama" name="Nama" />
              </div>
            </div>
            <div className="form-group row mt-3">
              <label htmlFor="nomorrekening" className="col-sm-4 col-form-label text-white fw-bolder">
                Nomor Rekening
              </label>
              <div className="col-sm-8">
                <input
                  type="number"
                  className="form-control"
                  id="nomorrekening"
                  placeholder="Nomor Rekening"
                  name="NomorRekening"
                />
              </div>
            </div>
            <div className="form-group row p-3">
              <div className="col-sm-12 d-flex justify-content-around">
                {isLoading ? (
									<div class="spinner-border text-primary" role="status">
										<span class="visually-hidden">Loading...</span>
									</div>
								) : (
									<>
										<Link to="/rent" className="btn btn-danger">
											Kembali
										</Link>
										<button type="submit" className="btn btn-primary">
											PAY
										</button>
										<button type="button" className="btn btn-secondary" onClick={handleRestart}>
											Restart
										</button>
									</>
								)}
                
              </div>
            </div>
          </form>
        </div>
        <table id="table" className="table table-bordered col-sm">
          <thead>
            <tr>
              <th className="bg-transparent">
                <input type="radio" name="payment_method" value="BCA" />
                <img src={BCA} width="90px" height="45px" alt="BCA" />
              </th>
              <th className="bg-transparent">
                <input type="radio" name="payment_method" value="BNI" />
                <img src={BNI} width="90px" height="45px" alt="BNI" />
              </th>
              <th className="bg-transparent">
                <input type="radio" name="payment_method" value="BRI" />
                <img src={BRI} width="90px" height="45px" alt="BRI" />
              </th>
              <th className="bg-transparent">
                <input type="radio" name="payment_method" value="Mandiri" />
                <img src={Mandiri} width="90px" height="45px" alt="Mandiri" />
              </th>
            </tr>
            <tr>
              <th className="bg-transparent">
                <input type="radio" name="payment_method" value="Dana" />
                <img src={Dana} width="90px" height="45px" alt="Dana" />
              </th>
              <th className="bg-transparent">
                <input type="radio" name="payment_method" value="Gopay" />
                <img src={Gopay} width="90px" height="45px" alt="Gopay" />
              </th>
              <th className="bg-transparent">
                <input type="radio" name="payment_method" value="OVO" />
                <img src={Ovo} width="90px" height="45px" alt="OVO" />
              </th>
              <th className="bg-transparent">
                <input type="radio" name="payment_method" value="ShopeePay" />
                <img src={ShopeePay} width="90px" height="45px" alt="ShopeePay" />
              </th>
            </tr>
          </thead>
        </table>
        <table id="data-table" className="table table-bordered col-sm">
          <thead>
            <tr>
              <th className="bg-transparent text-center">Nama</th>
              <th className="bg-transparent text-center">Nomor Rekening</th>
              <th className="bg-transparent text-center">Action</th>
            </tr>
          </thead>
          <tbody>
						{rows.map((row, index) => (
              <TableRow
                key={index}
                noRek={row.noRek}
                nama={row.nama}
                deleteButtonClickHandler={() => deleteButtonClickHandler(index)}
              />
            ))}
					</tbody>
        </table>
      </div>
    </div>
  );
}
