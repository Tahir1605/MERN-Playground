import { useForm } from 'react-hook-form';
const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors , isSubmitting},
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve,3000))
    console.log("Submitting the data", data);
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          React Hook Form
        </h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              First Name
            </label>
            <input
              {...register('firstName',
                {
                  required: { value: true, message: "First Name is required" },
                  minLength: { value: 3, message: "Min length should be 3" },
                  maxLength: { value: 6, message: "Max length should be 6" },
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Only letters and spaces are allowed",
                  }
                })}
              placeholder="Enter your first name"
              className="w-full outline-none rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            {errors.firstName && <p
              className="mt-1 text-sm text-red-500 font-semibold animate-pulse"
            >{errors.firstName.message}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last Name
            </label>
            <input
              {...register('lastName',
                {
                  required: { value: true, message: "Last Name is required" },
                  minLength: { value: 3, message: "Min length should be 3" },
                  maxLength: { value: 6, message: "Max length should be 6" },
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Only letters and spaces are allowed",
                  }
                }
              )}
              placeholder="Enter your last name"
              className="w-full outline-none rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            {errors.lastName && <p
              className="mt-1 text-sm text-red-500 font-semibold animate-pulse"
            >{errors.lastName.message}</p>}
          </div>


         {/* age */}


            <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Age
            </label>
            <input
              {...register('age',
                {
                  required: { value: true, message: "Age is required" },
                  min: { value: 18, message: "Minimum age should be atleast 18" },
                  max: { value: 35, message:"Maximum age should be atmost 35"},
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Only Number allowed",
                  }
                }
              )}
              placeholder="Enter your Age"
              className="w-full outline-none rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            {errors.age && <p
              className="mt-1 text-sm text-red-500 font-semibold animate-pulse"
            >{errors.age.message}</p>}
          </div>



         {/* Mobile number */}


            <div>
            <label
              htmlFor="mobileNumber"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mobile Number
            </label>
            <input
              {...register('mobileNumber',
                {
                  required: { value: true, message: "Mobile number is required" },
                  minLength: { value: 10, message: "Min length should be 10" },
                  maxLength: { value: 10, message: "Max length should be 10" },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Only Number Allowed",
                  }
                }
              )}
              placeholder="Enter your Mobile Number"
              className="w-full outline-none rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            {errors.mobileNumber && <p
              className="mt-1 text-sm text-red-500 font-semibold animate-pulse"
            >{errors.mobileNumber.message}</p>}
          </div>



          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              {...register('email',
                {
                  required: { value: true, message: "Email is required" },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email"
                  }
                }
              )}
              placeholder="Enter your email"
              className="w-full outline-none rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p
              className="mt-1 text-sm text-red-500 font-semibold animate-pulse"
            >{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              {...register("password", {
                required: { value: true, message: "Password is required" },
                minLength: { value: 6, message: "Minimum length should be 6" },
                validate: {
                  hasUpperCase: (value) =>
                    /[A-Z]/.test(value) || "At least one uppercase letter is required",
                  hasLowerCase: (value) =>
                    /[a-z]/.test(value) || "At least one lowercase letter is required",
                  hasNumber: (value) =>
                    /\d/.test(value) || "At least one number is required",
                  hasSpecialChar: (value) =>
                    /[@$!%*?&]/.test(value) || "At least one special character is required",
                },
              })}
              placeholder="Enter your password"
              className="w-full outline-none rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />

            {/* Show errors safely */}
            {errors.password?.type === "required" && (
              <p className="text-red-500 text-sm font-semibold animate-pulse">
                {errors.password.message}
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 text-sm font-semibold animate-pulse">
                {errors.password.message}
              </p>
            )}
            {errors.password?.type === "hasUpperCase" && (
              <p className="text-red-500 text-sm font-semibold animate-pulse">
                {errors.password.message}
              </p>
            )}
            {errors.password?.type === "hasLowerCase" && (
              <p className="text-red-500 text-sm font-semibold animate-pulse">
                {errors.password.message}
              </p>
            )}
            {errors.password?.type === "hasNumber" && (
              <p className="text-red-500 text-sm font-semibold animate-pulse">
                {errors.password.message}
              </p>
            )}
            {errors.password?.type === "hasSpecialChar" && (
              <p className="text-red-500 text-sm font-semibold animate-pulse">
                {errors.password.message}
              </p>
            )}
          </div>


          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white font-medium rounded-lg px-4 py-2 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition"
          >
            {isSubmitting ? "Submitting" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
