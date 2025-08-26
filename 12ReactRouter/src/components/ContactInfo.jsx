import { Mail, Phone, MapPin } from "lucide-react"; // install: npm i lucide-react

const ContactInfo = () => {
  return (
    <div className="flex justify-center items-center py-10 px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Contact Information
        </h2>

        {/* Email */}
        <div className="flex items-center gap-4 p-4 border rounded-xl hover:shadow-md transition">
          <Mail className="w-6 h-6 text-blue-600" />
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-gray-800 font-medium">example@gmail.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4 p-4 border rounded-xl hover:shadow-md transition">
          <Phone className="w-6 h-6 text-green-600" />
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="text-gray-800 font-medium">+91 1234567890</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center gap-4 p-4 border rounded-xl hover:shadow-md transition">
          <MapPin className="w-6 h-6 text-red-600" />
          <div>
            <p className="text-sm text-gray-500">Address</p>
            <p className="text-gray-800 font-medium">
              XYZ Street, Kolkata
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
