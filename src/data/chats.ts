import user1 from "../assets/user.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";

export type UserType = {
  userName: string;
  messages: {
    from: "user" | "ai";
    content: string;
    time: string;
  }[];
  userImage: string;
  id: string;
  email: string;
  phoneNo: string;
  location: string;
  confidance: "Low" | "Medium" | "High";
  createdAt: string;
};

export const chats = [
  {
    userName: "Jhon Doe",
    messages: [
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hi there! Welcome to BeyondChats",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "What brings you here today?",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Ask me anything about BeyondChats",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hey there",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `How's your day going?`,
        time: "6/9/24",
      },
      {
        from: "ai",
        content:
          "If you have any questions about BeyondChats or how our chatbots can enhance customer interactions, feel free to ask!",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Audio",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `That's totally okay! Chatbots can be a bit of an overlooked topic. At BeyondChats, we create chatbots that enhance customer interactions and streamline communication. Imagine having instant support available twenty-four-seven! Isn't that exciting? What kind of services do you think could benefit from chatbot technology?`,
        time: "7/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hi there! Welcome to BeyondChats",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "What brings you here today?",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Ask me anything about BeyondChats",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hey there",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `How's your day going?`,
        time: "6/9/24",
      },
      {
        from: "ai",
        content:
          "If you have any questions about BeyondChats or how our chatbots can enhance customer interactions, feel free to ask!",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Audio",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `That's totally okay! Chatbots can be a bit of an overlooked topic. At BeyondChats, we create chatbots that enhance customer interactions and streamline communication. Imagine having instant support available twenty-four-seven! Isn't that exciting? What kind of services do you think could benefit from chatbot technology?`,
        time: "7/9/24",
      },
    ],
    userImage: user1,
    id: "526874",
    email: "abc@gmail.com",
    phoneNo: "+917672792865",
    location: "Delhi, India",
    confidance: "High",
    createdAt: "6/9/24",
  },
  {
    userName: "Doom",
    messages: [
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hi there! Welcome to BeyondChats",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "What brings you here today?",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Ask me anything about BeyondChats",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hey there",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `How's your day going?`,
        time: "6/9/24",
      },
      {
        from: "ai",
        content:
          "If you have any questions about BeyondChats or how our chatbots can enhance customer interactions, feel free to ask!",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Audio",
        time: "7/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hi there! Welcome to BeyondChats",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "What brings you here today?",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Ask me anything about BeyondChats",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hey there",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `How's your day going?`,
        time: "6/9/24",
      },
      {
        from: "ai",
        content:
          "If you have any questions about BeyondChats or how our chatbots can enhance customer interactions, feel free to ask!",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Audio",
        time: "6/9/24",
      },
    ],
    userImage: user2,
    id: "526964",
    email: "abdsc@gmail.com",
    phoneNo: "+917672795265",
    location: "Indore, India",
    confidance: "Medium",
    createdAt: "6/9/24",
  },
  {
    userName: "William Doe",
    messages: [
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hi there! Welcome to BeyondChats",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "What brings you here today?",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Ask me anything about BeyondChats",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hey there",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `How's your day going?`,
        time: "6/9/24",
      },
      {
        from: "ai",
        content:
          "If you have any questions about BeyondChats or how our chatbots can enhance customer interactions, feel free to ask!",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Audio",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `That's totally okay! Chatbots can be a bit of an overlooked topic. At BeyondChats, we create chatbots that enhance customer interactions and streamline communication. Imagine having instant support available twenty-four-seven! Isn't that exciting? What kind of services do you think could benefit from chatbot technology?`,
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hi there! Welcome to BeyondChats",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "What brings you here today?",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Ask me anything about BeyondChats",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hey there",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `How's your day going?`,
        time: "6/9/24",
      },
      {
        from: "ai",
        content:
          "If you have any questions about BeyondChats or how our chatbots can enhance customer interactions, feel free to ask!",
        time: "6/9/24",
      },
    ],
    userImage: user3,
    id: "527594",
    email: "kjhgfsd@gmail.com",
    phoneNo: "+919859692865",
    location: "Delhi, India",
    confidance: "High",
    createdAt: "6/9/24",
  },
  {
    userName: "No one",
    messages: [
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hi there! Welcome to BeyondChats",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "What brings you here today?",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Ask me anything about BeyondChats",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hey there",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `How's your day going?`,
        time: "6/9/24",
      },
      {
        from: "ai",
        content:
          "If you have any questions about BeyondChats or how our chatbots can enhance customer interactions, feel free to ask!",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Audio",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `That's totally okay! Chatbots can be a bit of an overlooked topic. At BeyondChats, we create chatbots that enhance customer interactions and streamline communication. Imagine having instant support available twenty-four-seven! Isn't that exciting? What kind of services do you think could benefit from chatbot technology?`,
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hi there! Welcome to BeyondChats",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "What brings you here today?",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Ask me anything about BeyondChats",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hey there",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `How's your day going?`,
        time: "6/9/24",
      },
    ],
    userImage: user4,
    id: "752874",
    email: "abc@gmail.com",
    phoneNo: "+917672792865",
    location: "Mumbai, India",
    confidance: "Low",
    createdAt: "6/9/24",
  },
  {
    userName: "Paape",
    messages: [
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hi there! Welcome to BeyondChats",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "What brings you here today?",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Ask me anything about BeyondChats",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hey there",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `How's your day going?`,
        time: "6/9/24",
      },
      {
        from: "ai",
        content:
          "If you have any questions about BeyondChats or how our chatbots can enhance customer interactions, feel free to ask!",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hi there! Welcome to BeyondChats",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "What brings you here today?",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Ask me anything about BeyondChats",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hey there",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `That's totally okay! Chatbots can be a bit of an overlooked topic. At BeyondChats, we create chatbots that enhance customer interactions and streamline communication. Imagine having instant support available twenty-four-seven! Isn't that exciting? What kind of services do you think could benefit from chatbot technology?`,
        time: "7/9/24",
      },
    ],
    userImage: user1,
    id: "982874",
    email: "ukgd@gmail.com",
    phoneNo: "+91753692865",
    location: "Mumbai, India",
    confidance: "Low",
    createdAt: "6/9/24",
  },
  {
    userName: "Chintu",
    messages: [
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hi there! Welcome to BeyondChats",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "What brings you here today?",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Ask me anything about BeyondChats",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hey there",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `How's your day going?`,
        time: "6/9/24",
      },
    ],
    userImage: user2,
    id: "529824",
    email: "abc@gmail.com",
    phoneNo: "+919869742635",
    location: "Kolkata, India",
    confidance: "Medium",
    createdAt: "6/9/24",
  },
  {
    userName: "William Doe",
    messages: [
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hi there! Welcome to BeyondChats",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "What brings you here today?",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Ask me anything about BeyondChats",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hey there",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `How's your day going?`,
        time: "6/9/24",
      },
      {
        from: "ai",
        content:
          "If you have any questions about BeyondChats or how our chatbots can enhance customer interactions, feel free to ask!",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Audio",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `That's totally okay! Chatbots can be a bit of an overlooked topic. At BeyondChats, we create chatbots that enhance customer interactions and streamline communication. Imagine having instant support available twenty-four-seven! Isn't that exciting? What kind of services do you think could benefit from chatbot technology?`,
        time: "6/9/24",
      },
    ],
    userImage: user3,
    id: "598752",
    email: "sdvih@gmail.com",
    phoneNo: "+91986973935",
    location: "Chennai, India",
    confidance: "Low",
    createdAt: "6/9/24",
  },
  {
    userName: "No one",
    messages: [
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hi there! Welcome to BeyondChats",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "What brings you here today?",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Ask me anything about BeyondChats",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hey there",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `How's your day going?`,
        time: "6/9/24",
      },
      {
        from: "ai",
        content:
          "If you have any questions about BeyondChats or how our chatbots can enhance customer interactions, feel free to ask!",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Audio",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `That's totally okay! Chatbots can be a bit of an overlooked topic. At BeyondChats, we create chatbots that enhance customer interactions and streamline communication. Imagine having instant support available twenty-four-seven! Isn't that exciting? What kind of services do you think could benefit from chatbot technology?`,
        time: "6/9/24",
      },
    ],
    userImage: user4,
    id: "866974",
    email: "abc@gmail.com",
    phoneNo: "+919869742635",
    location: "Kolkata, India",
    confidance: "Medium",
    createdAt: "6/9/24",
  },
  {
    userName: "Jhon Doe",
    messages: [
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hi there! Welcome to BeyondChats",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "What brings you here today?",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Ask me anything about BeyondChats",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hey there",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `How's your day going?`,
        time: "6/9/24",
      },
      {
        from: "ai",
        content:
          "If you have any questions about BeyondChats or how our chatbots can enhance customer interactions, feel free to ask!",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Audio",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `That's totally okay! Chatbots can be a bit of an overlooked topic. At BeyondChats, we create chatbots that enhance customer interactions and streamline communication. Imagine having instant support available twenty-four-seven! Isn't that exciting? What kind of services do you think could benefit from chatbot technology?`,
        time: "7/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hi there! Welcome to BeyondChats",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "What brings you here today?",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Ask me anything about BeyondChats",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hey there",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `How's your day going?`,
        time: "6/9/24",
      },
      {
        from: "ai",
        content:
          "If you have any questions about BeyondChats or how our chatbots can enhance customer interactions, feel free to ask!",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Audio",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `That's totally okay! Chatbots can be a bit of an overlooked topic. At BeyondChats, we create chatbots that enhance customer interactions and streamline communication. Imagine having instant support available twenty-four-seven! Isn't that exciting? What kind of services do you think could benefit from chatbot technology?`,
        time: "7/9/24",
      },
    ],
    userImage: user1,
    id: "658965",
    email: "abc@gmail.com",
    phoneNo: "+917672792865",
    location: "Delhi, India",
    confidance: "High",
    createdAt: "6/9/24",
  },
  {
    userName: "Doom",
    messages: [
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hi there! Welcome to BeyondChats",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "What brings you here today?",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Ask me anything about BeyondChats",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hey there",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `How's your day going?`,
        time: "6/9/24",
      },
      {
        from: "ai",
        content:
          "If you have any questions about BeyondChats or how our chatbots can enhance customer interactions, feel free to ask!",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Audio",
        time: "7/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hi there! Welcome to BeyondChats",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "What brings you here today?",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Ask me anything about BeyondChats",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hey there",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `How's your day going?`,
        time: "6/9/24",
      },
      {
        from: "ai",
        content:
          "If you have any questions about BeyondChats or how our chatbots can enhance customer interactions, feel free to ask!",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Audio",
        time: "6/9/24",
      },
    ],
    userImage: user2,
    id: "256874",
    email: "abdsc@gmail.com",
    phoneNo: "+917672795265",
    location: "Indore, India",
    confidance: "Medium",
    createdAt: "6/9/24",
  },
  {
    userName: "William Doe",
    messages: [
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hi there! Welcome to BeyondChats",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "What brings you here today?",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Ask me anything about BeyondChats",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hey there",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `How's your day going?`,
        time: "6/9/24",
      },
      {
        from: "ai",
        content:
          "If you have any questions about BeyondChats or how our chatbots can enhance customer interactions, feel free to ask!",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Audio",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `That's totally okay! Chatbots can be a bit of an overlooked topic. At BeyondChats, we create chatbots that enhance customer interactions and streamline communication. Imagine having instant support available twenty-four-seven! Isn't that exciting? What kind of services do you think could benefit from chatbot technology?`,
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hi there! Welcome to BeyondChats",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "What brings you here today?",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Ask me anything about BeyondChats",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hey there",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `How's your day going?`,
        time: "6/9/24",
      },
      {
        from: "ai",
        content:
          "If you have any questions about BeyondChats or how our chatbots can enhance customer interactions, feel free to ask!",
        time: "6/9/24",
      },
    ],
    userImage: user3,
    id: "458697",
    email: "kjhgfsd@gmail.com",
    phoneNo: "+919859692865",
    location: "Delhi, India",
    confidance: "High",
    createdAt: "6/9/24",
  },
  {
    userName: "No one",
    messages: [
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hi there! Welcome to BeyondChats",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "What brings you here today?",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Ask me anything about BeyondChats",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hey there",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `How's your day going?`,
        time: "6/9/24",
      },
      {
        from: "ai",
        content:
          "If you have any questions about BeyondChats or how our chatbots can enhance customer interactions, feel free to ask!",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Audio",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `That's totally okay! Chatbots can be a bit of an overlooked topic. At BeyondChats, we create chatbots that enhance customer interactions and streamline communication. Imagine having instant support available twenty-four-seven! Isn't that exciting? What kind of services do you think could benefit from chatbot technology?`,
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hi there! Welcome to BeyondChats",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "What brings you here today?",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Ask me anything about BeyondChats",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hey there",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `How's your day going?`,
        time: "6/9/24",
      },
    ],
    userImage: user4,
    id: "125478",
    email: "abc@gmail.com",
    phoneNo: "+917672792865",
    location: "Mumbai, India",
    confidance: "Low",
    createdAt: "6/9/24",
  },
  {
    userName: "Paape",
    messages: [
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hi there! Welcome to BeyondChats",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "What brings you here today?",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Ask me anything about BeyondChats",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hey there",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `How's your day going?`,
        time: "6/9/24",
      },
      {
        from: "ai",
        content:
          "If you have any questions about BeyondChats or how our chatbots can enhance customer interactions, feel free to ask!",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hi there! Welcome to BeyondChats",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "What brings you here today?",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Ask me anything about BeyondChats",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hey there",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `That's totally okay! Chatbots can be a bit of an overlooked topic. At BeyondChats, we create chatbots that enhance customer interactions and streamline communication. Imagine having instant support available twenty-four-seven! Isn't that exciting? What kind of services do you think could benefit from chatbot technology?`,
        time: "7/9/24",
      },
    ],
    userImage: user1,
    id: "365894",
    email: "ukgd@gmail.com",
    phoneNo: "+91753692865",
    location: "Mumbai, India",
    confidance: "Low",
    createdAt: "6/9/24",
  },
  {
    userName: "Chintu",
    messages: [
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hi there! Welcome to BeyondChats",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "What brings you here today?",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Ask me anything about BeyondChats",
        time: "6/9/24",
      },
      {
        from: "user",
        content: "Hey",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: "Hey there",
        time: "6/9/24",
      },
      {
        from: "ai",
        content: `How's your day going?`,
        time: "6/9/24",
      },
    ],
    userImage: user2,
    id: "758596",
    email: "abc@gmail.com",
    phoneNo: "+919869742635",
    location: "Kolkata, India",
    confidance: "Medium",
    createdAt: "6/9/24",
  },
] as UserType[];
