import Container from "./Tools/Container";
const Contact = () => {
  return (
    <Container id="contact" title="Content">
      <form className="bg-blue-500 flex flex-wrap">
        <div className="w-[50%] grow-0 flex flex-col px-2 my-1">
          <label htmlFor="name">Name</label>
          <input type="name" id="name" className="p-1" placeholder="John Doe" />
        </div>
        <div className="w-[50%] grow-0 flex flex-col px-2 my-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="p-1"
            placeholder="john@gmail.com"
          />
        </div>
        <div className="w-[100%] grow-1 px-2 my-1">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            className="w-[100%] py-1"
            placeholder="Subject"
          />
        </div>
        <div className="w-[100%] grow-1 px-2 my-1">
          <label htmlFor="text">Test</label>
          <textarea name="text" id="text" className="w-[100%]"></textarea>
        </div>
        <div className="w-full pt-3">
          <button type="button" className="bg-[blue] w-[100%] py-1 text-white">
            Subject
          </button>
        </div>
      </form>
    </Container>
  );
};

export default Contact;
