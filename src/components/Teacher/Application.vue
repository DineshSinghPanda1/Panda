<template>
  <v-container>
    <v-card>
      <v-toolbar flat color="primary" dark>
        <v-toolbar-title>Application</v-toolbar-title>
      </v-toolbar>
      <v-tabs centered>
        <v-tab>Today</v-tab>
        <v-tab>Last Week</v-tab>
        <v-tab>Overal</v-tab>
        <!-----------------Today---Page------------------->
        <v-tab-item>
          <v-row>
            <v-col
              cols="12"
              md="6"
              v-for="(stu, index) in balance"
              :key="index"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 8 : 2">
                  <v-list>
                    <v-list-item>
                      <v-list-item-avatar
                        color="grey"
                        size="100"
                      ></v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="title">{{
                          stu.name
                        }}</v-list-item-title>
                        <v-divider></v-divider>
                        <v-list-item-text class="body-2">
                          <p>Roll no: {{ stu.rollno }}</p>
                          <p>Father : {{ stu.father }}</p>
                          <p>Mobile: {{ stu.mobile }}</p>
                        </v-list-item-text>
                        <v-divider></v-divider>
                        <!--------------------->
                        <v-row align="center">
                          <v-col class="text-center" cols="12" md="6">
                            <div class="my-2">
                              <v-btn small rounded color="red">Reject</v-btn>
                            </div>
                          </v-col>
                          <v-col class="text-center" cols="12" md="6">
                            <div class="my-2">
                              <v-btn small rounded color="green">Accept</v-btn>
                            </div>
                          </v-col></v-row
                        >
                        <!------------------>
                      </v-list-item-content>
                      <div class="float-right">
                        <v-col cols="12">
                          <div>
                            <p>{{ stu.datestart }}</p>
                          </div>
                          <div>
                            <p>{{ stu.dateend }}</p>
                          </div>
                        </v-col>
                        <v-col cols="12">
                          <v-chip color="green" text-color="white" class
                            >View</v-chip
                          >
                        </v-col>
                      </div>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-hover>
            </v-col>
          </v-row></v-tab-item
        >
        <!---------------EnD--------------------------------->
        <!--------------------------Last Week---------------->
        <v-tab-item
          ><v-row>
            <v-col
              cols="12"
              md="6"
              v-for="(stu, index) in balance"
              :key="index"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 8 : 2">
                  <v-list>
                    <v-list-item>
                      <v-list-item-avatar
                        color="grey"
                        size="100"
                      ></v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="title">{{
                          stu.name
                        }}</v-list-item-title>
                        <v-divider></v-divider>
                        <v-list-item-text class="body-2">
                          <p>Roll no: {{ stu.rollno }}</p>
                          <p>Father : {{ stu.father }}</p>
                          <p>Mobile: {{ stu.mobile }}</p>
                        </v-list-item-text>
                        <v-divider></v-divider>
                        <!--------------------->
                        <v-row align="center">
                          <v-col class="text-center" cols="12" md="6">
                            <div class="my-2">
                              <v-btn small rounded color="red">Reject</v-btn>
                            </div>
                          </v-col>
                          <v-col class="text-center" cols="12" md="6">
                            <div class="my-2">
                              <v-btn small rounded color="green">Accept</v-btn>
                            </div>
                          </v-col></v-row
                        >
                        <!------------------>
                      </v-list-item-content>
                      <div class="float-right">
                        <v-col cols="12">
                          <div>
                            <p>{{ stu.datestart }}</p>
                          </div>
                          <div>
                            <p>{{ stu.dateend }}</p>
                          </div>
                        </v-col>
                        <v-col cols="12">
                          <v-chip color="green" text-color="white" class
                            >View</v-chip
                          >
                        </v-col>
                      </div>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-hover>
            </v-col>
          </v-row></v-tab-item
        >
        <!---------------ENd------------------------------->
        <!--------------------------Overal---------------->
        <v-tab-item
          ><v-row>
            <v-col
              cols="12"
              md="6"
              v-for="(stu, index) in balance"
              :key="index"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 8 : 2">
                  <v-list>
                    <v-list-item>
                      <v-list-item-avatar
                        color="grey"
                        size="100"
                      ></v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="title">{{
                          stu.name
                        }}</v-list-item-title>
                        <v-divider></v-divider>
                        <v-list-item-text class="body-2">
                          <p>Roll no: {{ stu.rollno }}</p>
                          <p>Father : {{ stu.father }}</p>
                          <p>Mobile: {{ stu.mobile }}</p>
                        </v-list-item-text>
                        <v-divider></v-divider>
                        <!--------------------->
                        <v-row align="center">
                          <v-col class="text-center" cols="12" md="6">
                            <div class="my-2">
                              <v-btn small rounded color="red">Reject</v-btn>
                            </div>
                          </v-col>
                          <v-col class="text-center" cols="12" md="6">
                            <div class="my-2">
                              <v-btn small rounded color="green">Accept</v-btn>
                            </div>
                          </v-col></v-row
                        >
                        <!------------------>
                      </v-list-item-content>
                      <div class="float-right">
                        <v-col cols="12">
                          <div>
                            <p>{{ stu.datestart }}</p>
                          </div>
                          <div>
                            <p>{{ stu.dateend }}</p>
                          </div>
                        </v-col>
                        <v-col cols="12">
                          <v-chip color="green" text-color="white" class
                            >View</v-chip
                          >
                        </v-col>
                      </div>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-hover>
            </v-col>
          </v-row></v-tab-item
        >
        <!-----------------End----------------------------->
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Application",

  data: () => ({
    tabs: null,

    balance: [
      {
        name: "Muskesh Singh",
        rollno: "3",
        father: "Mahesh Singh",
        mobile: "9876567768",
        datestart: "03/04/2020",
        dateend: "06/07/2020"
      },
      {
        name: "Happy",
        rollno: "15",
        father: "Pradeep kumar",
        mobile: "7656347700",
        datestart: "03/04/2020",
        dateend: "06/07/2020"
      },
      {
        name: "Anuj shastri",
        rollno: "2",
        father: "Manoj shastri",
        mobile: "8763006812",
        datestart: "03/04/2020",
        dateend: "06/07/2020"
      },
      {
        name: "Anuj shastri",
        rollno: "2",
        father: "Manoj shastri",
        mobile: "8763006812",
        datestart: "03/04/2020",
        dateend: "06/07/2020"
      },
      {
        name: "Anuj shastri",
        rollno: "2",
        father: "Manoj shastri",
        mobile: "8763006812",
        datestart: "03/04/2020",
        dateend: "06/07/2020"
      },
      {
        name: "Anuj shastri",
        rollno: "2",
        father: "Manoj shastri",
        mobile: "8763006812",
        datestart: "03/04/2020",
        dateend: "06/07/2020"
      },

      {
        name: "Anuj shastri",
        rollno: "2",
        father: "Manoj shastri",
        mobile: "8763006812",
        datestart: "03/04/2020",
        dateend: "06/07/2020"
      },
      {
        name: "Anuj shastri",
        rollno: "2",
        father: "Manoj shastri",
        mobile: "8763006812",
        datestart: "03/04/2020",
        dateend: "06/07/2020"
      }
    ]
  })
});
</script>
