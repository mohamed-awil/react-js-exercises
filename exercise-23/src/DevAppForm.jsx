import { useState } from "react";
export const DevAppForm = () => {
  const [errors, setErrors] = useState({});
  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "Java",
    "UI Design",
    "API Development",
  ];

  const [devData, setDevData] = useState({
    name: "",
    email: "",
    role: "",
    experience: "",
    skills: [],
    Notifications: false,
    agreeToTerms: false,
  });

  const validateForm = (data) => {
    const errors = {};
    const nameRegex = /^[A-Za-z\s]{2,30}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (data.name.trim() === "") {
      errors.name = "Full name is required";
    } else if (!nameRegex.test(data.name)) {
      errors.name = "Please enter a valid name (2-30 characters, letters only)";
    };

    if (data.email === "") {
      errors.email = "Email is required";
    } else if (!emailRegex.test(data.email)) {
      errors.email = "Please enter a valid email address";
    };

    if (data.role === "") {
      errors.role = "Please select a role";
    };

    if (data.experience <= 0) {
      errors.experience = "Experience is required";
    } else if (data.experience > 54) {
      errors.experience = "Please enter a valid years experience (0-55)";
    };

    if (!data.agreeToTerms) {
      errors.agreeToTerms = "You must agree to the terms";
    };

    if (data.skills.length < 1) {
      errors.skills = "Please select at least one skill";
    };

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm(devData);

    if (Object.keys(formErrors).length < 1) {
      console.log(devData);
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedData = {
      ...devData,
      [name]: type === "checkbox" ? checked : value,
    };
    setDevData(updatedData);
    const formErrors = validateForm(updatedData);
    setErrors(formErrors);
  };

  const handleSkills = (e) => {
    const { value, checked } = e.target;
    const updatedData = {
      ...devData,
      skills: checked
        ? [...devData.skills, value]
        : devData.skills.filter((skill) => skill !== value),
    };

    setDevData(updatedData);
    const formErrors = validateForm(updatedData);
    setErrors(formErrors);
  };

  return (
    <div className="max-w-2xl bg-white py-4 px-6 mx-auto rounded-md">
      <div className="text-center">
        <h2 className="text-3xl font-semibold pb-2">
          Developer Application Form
        </h2>

        <form className="flex flex-col items-start " onSubmit={handleSubmit}>
          <label className="text-xl font-normal">Full Name</label>
          <input
            className="border outline-0 w-full mb-4 mt-2 rounded-sm p-1 text-xl"
            type="text"
            name="name"
            value={devData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-xl">{errors.name}</p>}
          <label className="text-xl font-normal">Email</label>
          <input
            className="border outline-0 w-full mb-4 mt-2 rounded-sm p-1 text-xl"
            type="text"
            name="email"
            value={devData.email}
            onChange={handleChange}
          />

          {errors.email && (
            <p className="text-red-500 text-xl">{errors.email}</p>
          )}
          <label className="text-xl font-normal">Role</label>
          <select
            name="role"
            value={devData.role}
            onChange={handleChange}
            className="border outline-0 w-full mb-4 mt-2 rounded-sm p-1 text-xl"
          >
            <option value="">Select your role</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Full-Stack Developer">Full-Stack Developer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Product Manager">Product Manager</option>
          </select>
          {errors.role && <p className="text-red-500 text-xl">{errors.role}</p>}
          <label className="text-xl font-normal">Exprience Years</label>
          <input
            className="border outline-0 w-full mb-4 mt-2 rounded-sm p-1 text-xl"
            type="number"
            name="experience"
            value={devData.experience}
            onChange={handleChange}
          />

          {errors.experience && (
            <p className="text-red-500 text-xl">{errors.experience}</p>
          )}

          <h6 className="text-xl font-normal">Skills</h6>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-2 min-w-full">
            {skills.map((skill) => (
              <label className="flex gap-2 w-full text-lg" key={skill}>
                <input
                  type="checkbox"
                  value={skill}
                  checked={devData.skills.includes(skill)}
                  onChange={handleSkills}
                />
                {skill}
              </label>
            ))}
          </div>
          {errors.skills && (
            <p className="text-red-500 text-xl">{errors.skills}</p>
          )}
          <div className="flex gap-2 my-2">
            <input
              type="checkbox"
              name="agreeToTerms"
              value={devData.agreeToTerms}
              checked={devData.agreeToTerms}
              onChange={handleChange}
            />
            <p className="text-xl">I gree to terms and conditions</p>
          </div>
          {errors.agreeToTerms && (
            <p className="text-red-500 text-xl">{errors.agreeToTerms}</p>
          )}

          <div className="flex gap-2 mb-2">
            <input
              type="checkbox"
              name="Notifications"
              value={devData.Notifications}
              checked={devData.Notifications}
              onChange={handleChange}
            />
            <p className="text-xl">
              Receive notifications about new opportunities
            </p>
          </div>
          <button
            className="w-full text-center bg-red-500  mx-auto my-2 rounded-md py-1 text-1xl text-white"
            type="submit"
          >
            {" "}
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};
