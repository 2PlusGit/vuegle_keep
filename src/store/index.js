import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isOpen: false,
    taskTitle:"",
    taskDetail:"",
    taskDate:"",
    searchWord:"", //検索文字列入力用
    allTasks:[], //全てのタスク
    displayedTasks:[] //表示されるタスク
  },
  mutations: {
    // 入力フォームを開く
    openInput(state){
      state.isOpen = !state.isOpen
    },

    // 入力フォームを閉じる
    inputClose(state){
      state.taskTitle = ""
      state.taskDetail = ""
      state.isOpen = false
    },

    // タスクを追加する
    addTask(state){
      let year = new Date().getFullYear()
      let month = new Date().getMonth()
      let day = new Date().getDay()
      let hour = new Date().getHours()
      let min = new Date().getMinutes()
      
      // タスク作成日時を取得
      state.taskDate = `入力日時：${year}/${month+1}/${day} ${hour}:${min}`

      // タスクを生の配列に追加
      state.allTasks.push({
        title: `${state.taskTitle}`,
        detail: `${state.taskDetail}`,
        date: `${state.taskDate}`
      })
      
      // タスクを表示用配列に追加
      state.displayedTasks.push({
        title: `${state.taskTitle}`,
        detail: `${state.taskDetail}`,
        date: `${state.taskDate}`
      })

      // 追加後バッファを削除
      state.taskTitle = ""
      state.taskDetail = ""
      state.isOpen = false
    },

    // タスクを一つ削除
    deleteTask(state, index){
      state.allTasks.splice(index, 1)
      state.displayedTasks.splice(index, 1)
    },

    // タスクを全て削除
    deleteAllTask(state){
      // 全削除の場合、確認を取ってから削除
      if(confirm("メモを全て削除してよろしいですか？")){
        state.allTasks = []
        state.displayedTasks = []
      }
    },

    // タスクを検索
    searchTasks(state, words){
      // フォームかからの状態で検索された場合は全て表示する
      if(words === ""){
        state.displayedTasks = state.allTasks
      }
      // フォームに入力された文字が含まれる場合、表示用の配列に格納し直す
      state.displayedTasks = state.displayedTasks.filter(function(task){
        return (task.title.indexOf(words) !== -1)
            || (task.detail.indexOf(words) !== -1) 
      })
    }
  },
  actions: {
    addTask({commit}){
      commit("addTask");
    },
    openInput({commit}){
      commit("openInput");
    },
    inputClose({commit}){
      commit("inputClose");
    },
    deleteTask({commit}, index){
      commit("deleteTask", index);
    },
    searchTasks({commit}, words){
      commit("searchTasks", words);
    },
    deleteAllTask({commit}){
      commit("deleteAllTask");
    }
  },

  modules: {
  }
})
