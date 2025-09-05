import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//-------------------- Signup --------------------
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://Integrite.dev/falcon/public/test/auth/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );

      const data = await res.json();
    //   console.log("dataa ", data);

      if (!res.ok) return rejectWithValue(data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

//-------------------- Login --------------------
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://Integrite.dev/falcon/public/test/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        }
      );

      const data = await res.json();
    //   console.log("looging reesss", data);

      if (!res.ok) return rejectWithValue(data);

         // Check different token keys for set into Localstorage 
      const token =
        data.token ||
        data.access_token ||
        data.jwt ||
        data.data?.token ||
        null;
      
      //Check token   
    //   if (token) {
    //     console.log(token);
        
        //  localStorage.setItem("token", token);
    //   } else {
    //     console.log("No token found in login response:", data);
    //   }

       localStorage.setItem("token", token);

      return { ...data, token };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// -------------------- Slice --------------------
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      //=== Signup====
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //=== Login===
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user || null;
        state.token = action.payload.token || null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        let errorMsg =
          action.payload?.message ||
          action.payload?.error ||
          action.payload?.errors?.[0] ||
          "Login failed! Please check your credentials.";

        state.error = { message: errorMsg };
      });


      
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;




