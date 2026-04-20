import { Button, Drawer } from "@heroui/react";

const Heropage = () => {
  return (
    <div className="container mx-auto text-center">
      <h2 >Hero Page</h2>
      <br />
      <Button variant="danger">Hero Button</Button>
      <br />
      <br />
      <Drawer>
      <Button variant="secondary">Open Drawer</Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="right">
          <Drawer.Dialog>
            <Drawer.Header>
              <Drawer.Heading>Drawer Title</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
              <p>
                This is a bottom drawer built with React Aria's Modal component. It slides up from
                the bottom of the screen with a smooth CSS transition.
              </p>
            </Drawer.Body>
            <Drawer.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close">Confirm</Button>
            </Drawer.Footer>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
    <br />
    <br />
    
    </div>
  );
};

export default Heropage;