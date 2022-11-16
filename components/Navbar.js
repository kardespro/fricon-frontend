import axios from 'axios'
import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.js";
import { useState , useEffect} from 'react'
import { makeid } from '../lib/String'
export default function App() {
  const [workerID,setWorkerID] = useState()
  const [preferModal,setPreferModal] = useState(false)
  function pfTheme(){
    let dataTheme = window.localStorage.getItem("theme")
    if(dataTheme === "dark"){
      window.localStorage.setItem("theme","white")
    }

window.localStorage.setItem("theme","dark")

  }
  const collapseItems = [
    {
      "name": "Home", "url": "/"
    },
    {
      "name": "Emojis", "url": "/emojis"
    },
    {
      "name": "Packs", "url": "/packs"
    },
    {
      "name": "API", "url": "/docs/api"
    }
  ];
 useEffect(() => {
    setWorkerID(makeid(5))
 },[])
  return (
    <>
      <Navbar isBordered variant="sticky" className="bg-[#5865f2]">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            Fricon
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="primary"
          hideIn="xs"
          variant="highlight"
        >
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/emojis">
            Emojis
          </Navbar.Link>
          <Navbar.Link href="/packs">Packs</Navbar.Link>
          <Navbar.Link href="/docs/api">API</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src="https://www.svgrepo.com/show/353655/discord-icon.svg"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="warning"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  guest.{workerID}@fricon.fun
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                <button>Change Theme</button>
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        <Navbar.Collapse disableAnimation>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="primary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href={item.url}
              >
                {item.name}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    {preferModal && 
    <div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
      <label htmlFor="my-modal-6" className="btn">Yay!</label>
    </div>
  </div>
</div>
    }
  </>
  );
}
