import { NavBar } from "./NavBar";
import { Footer } from "./NavBar";
import { CustomButton } from "./CustomUi";

export function Profile() {
  return (
    <>
      <nav className="nav-bar-section">
        <NavBar />
      </nav>

      {/* Profile-section */}
      <div className="profile flex flex-col items-center gap-10 px-4 py-10">
        <div className="profile-section flex flex-col gap-10">
          <div className="title-section flex flex-col gap-2">
            <span className="text-sm font-semibold text-third-700">
              Profile
            </span>
            <h3 className="text-3xl font-bold text-second-500">
              Let's make profile to let others know you
            </h3>
          </div>

          {/* Basic Information */}
          <div className="basic-information-section flex flex-col gap-6">
            <h4 className="text-2xl font-bold text-fourth-900">
              Basic Information
            </h4>
            <label className="name-section flex w-full flex-col gap-1">
              <span className="text-base font-normal text-utility-second">
                Name
              </span>
              <input type="text" className="h-12 w-full rounded-[8px] border" />
            </label>
            <label className="city-section flex w-full flex-col gap-1">
              <span className="text-base font-normal text-utility-second">
                City
              </span>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Bangkok
                </option>
                <option>Songkhla</option>
                <option>Chiangmai</option>
              </select>
            </label>
            <label className="location-section flex w-full flex-col gap-1">
              <span className="text-base font-normal text-utility-second">
                City
              </span>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Thailand
                </option>
                <option>Japan</option>
                <option>China</option>
              </select>
            </label>
            <label className="name-section flex w-full flex-col gap-1">
              <span className="text-base font-normal text-fourth-600">
                Email
              </span>
              <input
                type="text"
                placeholder="user email"
                className="h-12 w-full rounded-[8px] border px-4 py-3 placeholder-fourth-900"
                disabled
              />
            </label>
            <label className="username-section flex w-full flex-col gap-1">
              <span className="text-base font-normal text-utility-second">
                Username
              </span>
              <input
                type="text"
                placeholder="At least 6 character"
                className="h-12 w-full rounded-[8px] border px-4 py-3 placeholder-fourth-900"
              />
            </label>
          </div>

          {/* Identites and Interest Information */}
          <div className="identities-interest-section flex flex-col gap-6">
            <h4 className="text-2xl font-bold text-fourth-900">
              Identites and Interests
            </h4>
            <label className="sexual-preferences-section flex w-full flex-col gap-1">
              <span className="text-base font-normal text-utility-second">
                Sexual preferences
              </span>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Female
                </option>
                <option>Male</option>
                <option>LGBTQ+</option>
              </select>
            </label>
            <label className="sexual-identities-section flex w-full flex-col gap-1">
              <span className="text-base font-normal text-utility-second">
                Sexual identities
              </span>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Male
                </option>
                <option>Female</option>
                <option>LGBTQ+</option>
              </select>
            </label>
            <label className="meeting-interests-section flex w-full flex-col gap-1">
              <span className="text-base font-normal text-utility-second">
                Meeting interests
              </span>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Friends
                </option>
                <option>Others</option>
              </select>
            </label>
            <label className="racial-preferences-section flex w-full flex-col gap-1">
              <span className="text-base font-normal text-utility-second">
                Racial preferences
              </span>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Asian
                </option>
                <option>Chinese</option>
                <option>Japanese</option>
              </select>
            </label>
            <label className="hobbies-section flex w-full flex-col gap-1">
              <span className="text-base font-normal text-utility-second">
                Hobbies / Interests (Maximum 10)
              </span>
              <input
                type="text"
                className="h-12 w-full rounded-[8px] border px-4 py-3 placeholder-fourth-900"
              />
            </label>
            <label className="about-me-section flex w-full flex-col gap-1">
              <span className="text-base font-normal text-utility-second">
                About me (Maximum 150 characters)
              </span>
              <input
                type="text"
                placeholder="Write something about yourself"
                className="h-28 w-full rounded-[8px] border px-4 pb-14 placeholder-fourth-900"
              />
            </label>
          </div>
        </div>

        {/* Button: Preview and Update profile */}
        <div className="button-section flex flex-row gap-4">
          <CustomButton
            children="Preview Profile"
            buttonType="secondary"
            customStyle="w-[162px] text-base font-bold"
          />
          <CustomButton
            children="Update Profile"
            buttonType="primary"
            customStyle="w-[162px] text-base font-bold"
          />
        </div>

        {/* Button: Delete account */}
        <div className="delete-account">
          <button
            className="text-base font-bold text-fourth-700"
            onClick={() =>
              document.getElementById("delete-confirm").showModal()
            }
          >
            Delete account
          </button>
          {/* pop up delete confirm */}
          <dialog id="delete-confirm" className="modal px-4">
            <div className="delete-popup w-full rounded-2xl bg-white">
              <div className="delete-title flex flex-row items-center justify-between border-b border-fourth-300 px-4 py-2">
                <h3 className="text-xl font-semibold">Delete Confirmation</h3>
                <form method="dialog">
                  <button className="btn btn-circle btn-ghost btn-sm text-xl text-fourth-500">
                    x
                  </button>
                </form>
              </div>
              <div className="flex flex-col gap-6 p-4">
                <p className="text-base font-normal text-fourth-700">
                  Do you sure to delete account?
                </p>
                <CustomButton
                  children="Yes, I want to delete"
                  buttonType="secondary"
                  customStyle="text-base font-bold"
                />
                <CustomButton
                  children="No, I don't"
                  buttonType="primary"
                  customStyle="text-base font-bold"
                />
              </div>
            </div>
          </dialog>
        </div>
      </div>

      <footer className="footer-section">
        <Footer />
      </footer>
    </>
  );
}
