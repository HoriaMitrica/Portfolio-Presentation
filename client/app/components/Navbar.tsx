import SocialMediaIcons from "./SocialMediaIcons"

const Navbar = () => {

    return (
        <div className="flex items-center justify-between w-full p-4">
            <h1 className="text-2xl font-bold">
                Alexandra Stoica aka Roide Rodiozaur
            </h1>
            <SocialMediaIcons />
        </div>
    )
}
export default Navbar;