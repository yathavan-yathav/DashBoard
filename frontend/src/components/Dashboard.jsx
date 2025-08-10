import { useAppContext } from "../context/AppContext";
import { useState } from "react";

export default function Dashboard() {
  const { header, setHeader, navbar, setNavbar, footer, setFooter } = useAppContext();
  const [preview, setPreview] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD}/image/upload`, {
      method: "POST",
      body: formData
    });
    const data = await res.json();
    setHeader({ ...header, image: data.secure_url });
  };

  return (
    <div className="p-4 bg-gray-100">
      {/* Header Edit */}
      <h2 className="text-xl font-bold mb-2">Header</h2>
      <input
        type="text"
        value={header.title}
        onChange={(e) => setHeader({ ...header, title: e.target.value })}
        className="border p-2 mb-2 block w-full"
        placeholder="Title"
      />
      <input type="file" onChange={handleImageUpload} className="mb-2" />
      {preview && <img src={preview} alt="Preview" className="w-32 h-32 object-cover" />}

      {/* Navbar Edit */}
      <h2 className="text-xl font-bold mt-4 mb-2">Navbar</h2>
      {navbar.map((link, idx) => (
        <div key={idx} className="flex space-x-2 mb-2">
          <input
            type="text"
            value={link.label}
            onChange={(e) => {
              const updated = [...navbar];
              updated[idx].label = e.target.value;
              setNavbar(updated);
            }}
            className="border p-2 flex-1"
          />
          <input
            type="text"
            value={link.url}
            onChange={(e) => {
              const updated = [...navbar];
              updated[idx].url = e.target.value;
              setNavbar(updated);
            }}
            className="border p-2 flex-1"
          />
        </div>
      ))}

      {/* Footer Edit */}
      <h2 className="text-xl font-bold mt-4 mb-2">Footer</h2>
      <input
        type="text"
        value={footer.email}
        onChange={(e) => setFooter({ ...footer, email: e.target.value })}
        className="border p-2 mb-2 block w-full"
      />
      <input
        type="text"
        value={footer.phone}
        onChange={(e) => setFooter({ ...footer, phone: e.target.value })}
        className="border p-2 mb-2 block w-full"
      />
      <input
        type="text"
        value={footer.address}
        onChange={(e) => setFooter({ ...footer, address: e.target.value })}
        className="border p-2 mb-2 block w-full"
      />
    </div>
  );
}
