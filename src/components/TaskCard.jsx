import { Card } from "@heroui/react";

import React from "react";
import Link from "next/link";

const TaskCard = ({task}) => {

    const {title, description, status, priority, assignedTo} = task;
  return (
    <div>
      <Card variant="tertiary" className="w-[400px] border-2 border-primary bg-black">
       
        <Card.Header>
          <Card.Title >{title}</Card.Title>
          <Card.Description>
            {description}
          </Card.Description>
          <Card.Description>
           Assigned: {assignedTo}
          </Card.Description>
        </Card.Header>
        <Card.Footer>
          {/* <Link
            aria-label="Go to Acme Creator Hub (opens in new tab)"
            href="https://heroui.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            {category}
            <Link.Icon aria-hidden="true" />
          </Link> */}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default TaskCard;
