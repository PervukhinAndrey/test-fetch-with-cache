import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type UserInfo = {
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};

type UserRequestData = {
  results?: UserInfo[];
  timestamp: number;
};
type InitialState = {
  loading: boolean;
  userRequestData: UserRequestData;
  error: string;
};
const initialState: InitialState = {
  loading: false,
  userRequestData: {
    timestamp: 0,
  },
  error: "",
};

// Generates pending, fulfilled and rejected action types

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (cuttentDateTimeNum: number, { getState }) => {
    const { user } = getState() as { user: InitialState };
    if (cuttentDateTimeNum - user.userRequestData.timestamp > 20000) {
      return axios
        .get("https://randomuser.me/api/")
        .then((response) => ({ ...response.data, timestamp: Date.now() }));
    } else {
      return user.userRequestData;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearTimestamp: (state) => {
      state.userRequestData.timestamp = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<UserRequestData>) => {
        state.loading = false;
        state.userRequestData = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.userRequestData = {
        timestamp: 0,
      };
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default userSlice.reducer;
export const { clearTimestamp } = userSlice.actions;
